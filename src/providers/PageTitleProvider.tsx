import React, {
	useState,
	useCallback,
	useEffect,
	FunctionComponent
} from "react";

export type PageTitleContextType = {
	pageTitle: string;
	changePageTitle: (title: string) => void;
};

export const PageTitleContext = React.createContext<
	PageTitleContextType | undefined
>(undefined);

export const PageTitleProvider: FunctionComponent = ({ children }) => {
	const [pageTitle, setPageTitle] = useState<string>("");
	const changePageTitle = useCallback((title: string) => {
		setPageTitle(title);
	}, []);
	useEffect(() => {
		document.title = pageTitle;
	}, [pageTitle]);

	return (
		<PageTitleContext.Provider value={{ pageTitle, changePageTitle }}>
			<link rel="icon" />
			{children}
		</PageTitleContext.Provider>
	);
};
