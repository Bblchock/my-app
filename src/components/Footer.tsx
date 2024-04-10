import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer__title">Контакты:</h3>
      <div className="footer__wrapper">
        <div className="footer__wrapper__contact">
          <p>
            Email:<strong> Bblchock.p.izdat@gmail.com</strong>
          </p>
        </div>
        <div className="footer__wrapper__contact">
          <p>
            Phone:<strong> +7 999 999 99 99</strong>
          </p>
        </div>
        <div className="footer__wrapper__contact">
          <p>
            GitHub:
            <strong>
              <a
                className="footer__wrapper__contact__link"
                target="blank"
                href="https://github.com/Bblchock"
                rel="noopener"
              >
                {' '}
                Bblchock
              </a>
            </strong>
          </p>
        </div>
      </div>
    </footer>
  );
};
