import React from 'react';

const CopyrightSec = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer class="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © {year} - All right reserved by || AL Noor Istiak ||</p>
                </div>
            </footer>
        </div>
    );
};

export default CopyrightSec;