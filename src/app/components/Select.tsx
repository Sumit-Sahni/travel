import { Button } from "@chakra-ui/react";

interface SelectProps {
  label: string;
}

const Select: React.FC<SelectProps> = ({ label }) => {
  return <Button className=" border-2 shadow-2xl" >{label}</Button>;
};

export default Select;
