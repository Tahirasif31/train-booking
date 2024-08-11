import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="site-primary-footer-wrap ast-builder-grid-row-container site-footer-focus-item grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 w-full">
        <div className="site-primary-footer-inner-wrap grid grid-cols-1">
          <div className="site-footer-primary-section-1 site-footer-section site-footer-section-1">
            <aside
              className="footer-widget-area widget-area site-footer-focus-item footer-widget-area-inner"
              aria-label="Footer Widget 1"
            >
              <section id="block-7" className="widget widget_block widget_text">
                <p>
                  123 Fifth Avenue, NY 10160, New York, USA | Phone:
                  855-518-1787 | Email: booking@amtraintrac.com
                </p>
              </section>
            </aside>
            <div className="ast-builder-layout-element flex site-footer-focus-item ast-footer-copyright">
              <div className="ast-footer-copyright">
                <p>Copyright © 2024 Amtraintrac</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
