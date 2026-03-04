// mappers/activity.mapper.ts
import { sanitizeHtml } from '../../core/utils/sanitize';
import { bbcodeToHtml } from '../../core/utils/bbcode';
import type { Post } from '../../types/types';

// Verbs that represent actual displayable content
// const DISPLAYABLE_VERBS = new Set(['Create', 'Like', 'Dislike', 'Announce']);

export function shouldDisplayActivity(activity: any): boolean {
  // Filter out internal "Add" bookkeeping entries — they have no body and just mirror another item
  if (activity.verb === 'Add') return false;
  // Filter out items flagged as notshown
  if (activity.flags?.includes('notshown')) return false;
  return true;
}

export function mapActivityToPost(activity: any): Post {
  // Prefer pre-rendered HTML from the nested object if available
  const renderedHtml =
    activity.object?.object?.content ||   // nested Create/Add wrapper
    activity.object?.content ||            // direct activity object
    null;

  const body = renderedHtml
    ? sanitizeHtml(renderedHtml)
    : sanitizeHtml(bbcodeToHtml(activity.body ?? ''));

  return {
    id: activity.uuid,
    mid: activity.message_id,           // full URL, e.g. https://.../item/UUID
    parent_mid: activity.message_parent, // direct parent's message_id URL
    thr_parent: activity.message_parent, // same — Hubzilla API uses message_parent for direct parent
    top_mid: activity.message_top,       // thread root's message_id URL
    parent: activity.uuid,               // fallback, not used for threading
    body,
    title: activity.title ?? '',
    authorName: activity.author?.name ?? '',
    authorAvatar: activity.author?.photo?.src ?? '',
    authorUrl: activity.author?.url ?? '',
    created: activity.created,
    commented: activity.commented,
    edited: activity.edited,
    verb: activity.verb,
    obj_type: activity.object_type,
    flags: activity.flags ?? [],
    permalink: activity.permalink ?? '',
    children: [],
  };
}
