export default function Layout(props: any) {
  return (
    <div class="min-h-screen bg-gray-100 text-gray-900">
      <nav class="p-4 bg-blue-600 text-white font-bold">
        Hubzilla SPA
      </nav>
      <main class="p-6 max-w-3xl mx-auto">
        {props.children}
      </main>
    </div>
  );
}

