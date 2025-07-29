import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                {/* Main content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    
                    {/* Company Info */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold text-amber-400 mb-2">Panadería Moisés</h3>
                        <p className="text-gray-300 text-sm">
                            Los mejores panes artesanales y pasteles frescos
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="text-center md:text-left">
                        <h4 className="text-amber-400 font-semibold mb-2">Contacto</h4>
                        <div className="text-sm text-gray-300 space-y-1">
                            <p>(555) 123-4567</p>
                            <p>info@panaderiamoises.com</p>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="text-center md:text-left">
                        <h4 className="text-amber-400 font-semibold mb-2">Horarios</h4>
                        <div className="text-sm text-gray-300">
                            <p>Lun - Dom: 6:00 AM - 8:00 PM</p>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-700 pt-4">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                        <p className="text-sm text-gray-400">
                            © 2024 Panadería Moisés. Todos los derechos reservados.
                        </p>
                        <div className="flex space-x-4 text-sm">
                            <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                                Privacidad
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                                Términos
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}