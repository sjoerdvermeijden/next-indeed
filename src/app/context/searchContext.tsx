import React, {
    useState,
    createContext,
} from "react";

type Props = {
    children: React.ReactNode;
};

type SearchItem = {
    id: number,
    title: string
}

type SearchContextProps = {
    searchItems: SearchItem[] | [];
    addItem: () => void;
};

const SearchContextState = {
    searchItems: [],
    addItem: () => [],
};

export const SearchContext = createContext<SearchContextProps>(SearchContextState);

export function SearchComponent({ children }: Props) {
    const [searchItems, setSearchItems] = useState<SearchItem[]>([
        {
            id: 0,
            title: 'test'
        }
    ])

    const addItem = (search: SearchItem) => {
        setSearchItems([...searchItems, { id: searchItems.length + 1, title: search.title }])
    }

    return (
        <SearchContext.Provider value={[searchItems, addItem]}>
            <>{children}</>
        </SearchContext.Provider>
    );
}

export default SearchComponent;