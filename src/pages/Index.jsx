import React, { useState } from "react";
import {
  Container,
  VStack,
  HStack,
  Heading,
  Input,
  Button,
  Checkbox,
  IconButton,
  Text,
  Box,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <Heading as="h1" size="2xl" mb={6}>
          Todo App
        </Heading>
        <HStack w="100%">
          <Input
            placeholder="Add a new todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button colorScheme="teal" onClick={addTodo}>
            Add
          </Button>
        </HStack>
        <VStack w="100%" spacing={3} mt={6}>
          {todos.map((todo, index) => (
            <HStack
              key={index}
              w="100%"
              p={3}
              bg={todo.completed ? "green.100" : "gray.100"}
              borderRadius="md"
              justifyContent="space-between"
            >
              <Checkbox
                isChecked={todo.completed}
                onChange={() => toggleTodo(index)}
              >
                <Text as={todo.completed ? "s" : ""}>{todo.text}</Text>
              </Checkbox>
              <IconButton
                aria-label="Delete todo"
                icon={<FaTrash />}
                colorScheme="red"
                onClick={() => deleteTodo(index)}
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;