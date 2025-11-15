export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-12 h-12 border-4 border-forest/30 border-t-forest rounded-full animate-spin" />
    </div>
  );
}