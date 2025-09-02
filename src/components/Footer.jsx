
export default function Footer(){
    return(
        <footer className="w-full h-full text-center mt-10 text-xs text-neutral-700">
            <p className="mb-1">© 2025 Café Twenty Six. All rights reserved.</p>
            <p>28 Wadsworth Rd, Perivale, UB6 7JZ | Open Mon-Fri 9:30am – 17:30pm | Sat 10am - 17:30pm</p>
            <p className="scanlocal bg-[var(--scan-local-bg)] py-0.5 text-white mt-3">Powered by <a href="https://scanlocal.co.uk" 
            ><span className="text-[var(--scan-local)]">ScanLocal Ltd</span></a> </p>
        </footer>
    )
}