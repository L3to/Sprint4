export default function Rodape() {
  return (
    <footer className="text-center py-4 bg-[#01a1fb] bottom-0 w-full text-white">
      <p>&copy; {new Date().getFullYear()} LLA, Inc. All rights reserved.</p>
      <a
        href="https://github.com/L3to/Damage-Car-Detection-GC-v1.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <strong className="hover:text-blue-950">BINA</strong>
      </a>
    </footer>
  );
}
