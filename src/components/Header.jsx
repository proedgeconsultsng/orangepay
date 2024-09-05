export default function Header() {
    return (
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">OrangePay</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-500">About</a></li>
              <li><a href="#" className="text-gray-700 hover:text-blue-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  