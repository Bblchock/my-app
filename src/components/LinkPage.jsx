import React, { memo } from 'react';
import { Link } from "react-router-dom";

const LinkPage = memo(({ linkPage, page, className, onClick, id }) => {
	return (
		// Кнопки навигации
		<Link to={linkPage} className={className} onClick={() => onClick(id)}><li><strong>{page}</strong></li></Link>
	);
});

export default LinkPage;