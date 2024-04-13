import { memo } from 'react';
import { Link } from 'react-router-dom';

type LinkPage = {
  linkPage: string;
  page: string;
  className: string;
  onClick: (id: number) => void;
  id: number;
};

export const LinkPage = memo(
  ({ linkPage, page, className, onClick, id }: LinkPage) => {
    return (
      // Кнопки навигации
      <Link to={linkPage} className={className} onClick={() => onClick(id)}>
        <li>
          <strong>{page}</strong>
        </li>
      </Link>
    );
  },
);
