import { useContext, useEffect } from "react";

import {
	PageTitleContextType,
	PageTitleContext
} from "../providers/PageTitleProvider";

export const usePageTitle = (title?: string) => {
	const context = useContext<PageTitleContextType | undefined>(
		PageTitleContext
	);
	if (context === undefined) {
		throw new Error("usePageTitle mush be use with PageTitleProvider");
	}
	useEffect(() => {
		if (title) {
			context.changePageTitle(title);
		}
	}, [title, context]);
	return context;
};
