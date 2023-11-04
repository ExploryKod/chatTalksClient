// EXAMPLE FROM GLANUM APPS

const ThreeDotsPopup = ({userClientitem, clienItemName}: {userClientitem: UsersClient;clienItemName: string}) => {
  const [toggle, setToggle] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModifyModal, setOpenModifyModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const buttonPopupRef = useRef<HTMLButtonElement | null>(null);
  const fetcherDeleteUser = useFetcher();


  // Gestionnaire pour fermer le popup lorsque l'on clique en dehors de lui
  const handleClickOutside = (event: any) => {
    if (
      buttonPopupRef.current &&
      buttonPopupRef.current.contains(event.target)
    ) {
      setToggle((toggle) => !toggle);
    } else {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setToggle(false);
      }
    }
  };


  const handleOptionClick = (event: any) => {
    setOpenModal(true);
  };


  const handleModifyClient = () => {
    setOpenModifyModal(true);
  };


  useEffect(() => {
    // Ajoute un gestionnaire d'événement de clic global lorsque le composant est monté
    window.addEventListener("click", handleClickOutside);
    setIsLoading(false);
    setOpenModal(false);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <>
      <div className="flex justify-end lg:relative">
        <button
          ref={buttonPopupRef}
          className={`${
            Number(userClientitem.id) % 2 === 0
              ? "hover:bg-white"
              : "hover:bg-[#f3f4f5]"
          } rounded-full p-[5px] focus:animate-[ping_.5s_cubic-bezier(0,0,0.2,1)_0.1s]`}
        >
          <BsThreeDotsVertical />
        </button>
        {toggle && (
          <div
            ref={popupRef}
            className={`linear-blue three-dot-pop-up absolute lg:left-[-150px] right-[30px] top-[-6px] min-w-[160px] transition-popup rounded-[4px] shadow-[0px_10px_20px_#C4C8D066] ${toggle && 'transition-popup-open' }`}
          >
            <ul className="p-[4px]">
              <li
                className="mb-[4px] flex cursor-pointer items-center gap-x-[10px] rounded-[4px] px-[6px] py-[8px]
            text-[14px] transition duration-300 ease-in-out  hover:bg-[#f3f4f5]"
                data-te-toggle="tooltip"
                title="Renvoyer le mot de passe"
              >
                <IconContext.Provider
                  value={{ color: "#525252", size: "20px" }}
                >
                  <span>
                    <IoSend />
                  </span>
                </IconContext.Provider>
                Renvoyer
              </li>
              <li
                onClick={handleModifyClient}
                data-client={Number(userClientitem.id)}
                className="mb-[4px] flex cursor-pointer items-center gap-x-[10px] rounded-[4px] px-[6px] py-[8px] text-[14px] transition duration-300 ease-in-out hover:bg-[#f3f4f5]"
              >
                <IconContext.Provider
                  value={{ color: "#525252", size: "20px" }}
                >
                  <span>
                    <FiEdit />
                  </span>
                </IconContext.Provider>
                Modifier
              </li>
              <hr className="border-[rgba(145, 158, 171, 0.2)] border-[1px] border-dashed" />
              <li
                onClick={handleOptionClick}
                data-question="Voulez-vous supprimer ce compte ?"
                id="suppress-client-account"
                className="mb-[4px] flex cursor-pointer items-center gap-x-[10px] rounded-[4px] px-[6px]
            py-[8px] text-[14px] text-[#de392a] transition duration-300 ease-in-out hover:bg-[#f3f4f5]"
              >
                <IconContext.Provider
                  value={{ color: "#de392a", size: "20px" }}
                >
                  <span>
                    <IoTrashOutline />
                  </span>
                </IconContext.Provider>
                Supprimer
              </li>
            </ul>
          </div>
        )}
      </div>
      {openModal && (
        <ModalDelete
          setOpenModal={setOpenModal}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          userClientitem={userClientitem}
        />
      )}
      {openModifyModal && (
        <ModalModifyCompte
          setOpenModal={setOpenModifyModal}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          userClientitem={userClientitem}
          clienItemName={clienItemName}
        />
      )}
    </>
  );
};


export default ThreeDotsPopup;


