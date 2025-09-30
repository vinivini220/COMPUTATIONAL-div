// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { useToast } from "@/hooks/use-toast";

// const CookiesBanner = () => {
//   const [isAccepted, setIsAccepted] = useState(false);
//   const { toast } = useToast();

//   const handleAccept = () => {
//     setIsAccepted(true);
//     toast({
//       title: "Cookies Accepted",
//       description: "Thank you for accepting cookies!",
//     });
//   };

//   if (isAccepted) return null;

//   return (
//     <div className="z-[10000] fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-2/3 bg-gradient-to-r from-red-500 via-red-400 to-red-500 text-white p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 z-50 rounded-2xl shadow-2xl opacity-95 transition-all duration-500">
//       <p className="text-sm md:text-base text-center md:text-left drop-shadow-sm">
//         We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
//       </p>
//       <Button
//         onClick={handleAccept}
//         className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-3xl shadow-lg transition-all duration-300"
//       >
//         Accept
//       </Button>
//     </div>
//   );
// };

// export default CookiesBanner;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CookiesBanner = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const { toast } = useToast();

  // ✅ Check localStorage on component mount
  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (accepted === "true") {
      setIsAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    setIsAccepted(true);
    localStorage.setItem("cookiesAccepted", "true"); // ✅ Save user choice
    toast({
      title: "Cookies Accepted",
      description: "Thank you for accepting cookies!",
    });
  };

  if (isAccepted) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-2/3 bg-gradient-to-r from-red-500 via-red-400 to-red-500 text-white p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 z-[10000] rounded-2xl shadow-2xl opacity-95 transition-all duration-500">
      <p className="text-sm md:text-base text-center md:text-left drop-shadow-sm">
        We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
      </p>
      <Button
        onClick={handleAccept}
        className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-3xl shadow-lg transition-all duration-300"
      >
        Accept
      </Button>
    </div>
  );
};

export default CookiesBanner;
