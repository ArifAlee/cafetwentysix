export default function Footer(){
    return(
        <footer className="w-full h-full text-center mt-10 text-xs text-neutral-700">
            <p className="mb-1">© 2025 Café Twenty Six. All rights reserved.</p>
            <p>28 Wadsworth Rd, Perivale, UB6 7JZ | Open Mon-Fri 9am – 8:30pm</p>
            <p className="scanlocal bg-[var(--scan-local-bg)] py-0.5 text-white mt-3">Powered by <a href="scanlocal.co.uk" 
            onClick={() => track("scanlocal-btn", {subdomain: "cafetwentsix"})}
            ><span className="text-[var(--scan-local)]">ScanLocal Ltd</span></a> </p>
        </footer>
    )
}