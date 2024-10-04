export default function Rodape() {
  return (
    <footer className="text-center py-4 bg-laranja bottom-0 w-full">
      <p>
        &copy; {new Date().getFullYear()} LLA, Inc. All rights reserved.
      </p>
      <a>Termos de Privacidade</a> | <a>Termos de serviço</a>
    </footer>
  );
}
