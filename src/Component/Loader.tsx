
export const Loader = () => {
    return <img className="loader-image" src={import.meta.env.VITE_SITE_URL+'/public/loaders/taiji_loader.svg'} alt="loader" />;
}