export default function AboutImage() {
  return (
    <div className="relative max-w-[280px] mx-auto">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-75 blur-xl animate-pulse-subtle"></div>
      <div className="relative aspect-square rounded-xl overflow-hidden">
        <img
          src="/mehdi-profile.jpg"
          alt="Mehdi Khatiri"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}