export default function Rodape() {
  return (
    <footer className="text-center py-4 bg-laranja">
      <p>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
      <a>Privacy Policy</a> | <a>Terms of Service</a>
    </footer>
  );
}
