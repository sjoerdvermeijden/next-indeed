import React, {
    useState,
    Dispatch,
    SetStateAction,
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
    searchItems: SearchItem[];
    setSearchItems: Dispatch<SetStateAction<SearchItem[]>>;
    addItem: (search: SearchItem) => void;
};

const SearchContextState = {
    searchItems: [],
    setSearchItems: () => [],
    addItem: () => [],
};

export const SearchContext = createContext<SearchContextProps>(SearchContextState);

export function SearchComponent({ children }: Props) {

    const addItem = (search: SearchItem) => {
        setSearchItems([...searchItems, { id: searchItems.length + 1, title: search.title }])
    }

    const [searchItems, setSearchItems] = useState<SearchItem[]>([
        {
            id: 0,
            title: 'test'
        }
    ])

    return (
        <SearchContext.Provider value={[searchItems, addItem]}>
            <>{children}</>
        </SearchContext.Provider>
    );
}

export default SearchComponent;