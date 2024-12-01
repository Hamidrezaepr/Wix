import { useState } from "react";

const LanguageSelector = () => {
  // React state to track modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = (e) => {
    e.preventDefault(); // Prevent anchor tag default behavior
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Language Globe Icon (Trigger for Modal) */}
      <a className="flex items-center" href="#" onClick={openModal}>
        <box-icon className="hover:text-indigo-700 md:hidden" name="globe"></box-icon>
      </a>

      {/* Modal */}
      {isModalOpen && (
        <div id="languageModal" className="fixed text-center ps-96 inset-0 bg-white p-10 z-50 ">
          <div className="relative">
            {/* Close Button */}
            <button
              id="closeModal"
              className="absolute top-0 right-0 text-7xl"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Language List */}
            <div className="grid grid-cols-3 w-1/2 text-xl  justify-center items-start mt-20">
              <div className="flex flex-col gap-5 space-y-2">
                <a href="#" className="text-black hover:text-blue-500">
                  English
                </a>
                <a href="#" className="text-black hover:text-blue-500">
                  Deutsch
                </a>
                <a href="#" className="text-black hover:text-blue-500">
                  Español
                </a>
                <a href="#" className="text-black hover:text-blue-500">
                  Français
                </a>
                <a href="#" className="text-black hover:text-blue-500">
                  Italiano
                </a>
                <a href="#" className="text-black hover:text-blue-500">
                  Nederlands
                </a>
                <a href="#" className="text-black hover:text-blue-500">
                  Norsk
                </a>
                <a href="#" className="text-black hover:text-blue-500">
                  Polski
                </a>
              </div>
              <div className="flex flex-col gap-5 space-y-2">
                <a href="#" className="text-black hover:text-blue-500">
                  Português
                </a>
                <a href="#" className="text-black hover:text-blue-500">
                  Русский
                </a>
                <a href="#" className="text-black hover:text-blue-500">
                  Svenska
                </a>
                <a href="#" className="text-black hover:text-blue-500">
                  日本語
                </a>
                <a href="#" className="text-black hover:text-blue-500">
                  한국어
                </a>
                <a href="#" className="text-black hover:text-blue-500">
                  Türkçe
                </a>
                <a href="#" className="text-black hover:text-blue-500">
                  Dansk
                </a>
                <a href="#" className="text-black hover:text-blue-500">
                  हिन्दी
                </a>
              </div>
              <div className="flex flex-col gap-5 space-y-2">
                <a href="#" className="text-black hover:text-blue-500">
                  Čeština
                </a>
                <a href="#" className="text-black hover:text-blue-500">
                  ไทย
                </a>
                <a href="#" className="text-black hover:text-blue-500">
                  Українська
                </a>
                <a href="#" className="text-black hover:text-blue-500">
                  繁體中文
                </a>
                <a href="#" className="text-black hover:text-blue-500">
                  Tiếng Việt
                </a>
                <a href="#" className="text-black hover:text-blue-500">
                  Bahasa Indonesia
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
