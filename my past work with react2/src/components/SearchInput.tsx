import type { FormEvent } from "react";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useSearchTerm } from "../hooks/useSearchTerm";

export function SearchInput() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { searchTerm, setSearchTerm } = useSearchTerm();
  const handleReset = () => {
    if (searchInputRef.current) {
      searchInputRef.current.value = "";
    }

    if (searchTerm) {
      setSearchTerm({ q: "" });
    }
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setSearchTerm({
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const handleFocus = () => {
    navigate(searchTerm ? `/?q=${searchTerm}` : "/");
  };

  return (
    <HStack marginLeft="auto !important">
      <InputGroup onFocus={handleFocus}>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
        >
          <SearchIcon />
        </InputLeftElement>
        <Input
          ref={searchInputRef}
          placeholder="search"
          type="search"
          onChange={handleChange}
          name="q"
        />
        <InputRightElement>
          <Button onClick={handleReset}>
            <CloseIcon />
          </Button>
        </InputRightElement>
      </InputGroup>
    </HStack>
  );
}
