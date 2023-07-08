import React, { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

interface ModalAddFoodProps {
isOpen: boolean;
setIsOpen: () => void;
handleAddFood: (data: FormData) => void;
}

// interface FormData {
// image: string;
// name: string;
// price: string;
// description: string;
// }
interface FormData {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}


const ModalAddFood: React.FC<ModalAddFoodProps> = ({
isOpen,
setIsOpen,
handleAddFood,
}) => {
// const formRef = useRef<HTMLFormElement>(null);
// ref={formRef}
const handleSubmit = async (data: FormData) => {
handleAddFood(data);
setIsOpen();
};

return (
<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
<Form onSubmit={handleSubmit}>
<h1>Novo Prato</h1>
<Input name="image" placeholder="Cole o link aqui" />
<Input name="name" placeholder="Ex: Moda Italiana" />
    <Input name="price" placeholder="Ex: 19.90" />

    <Input name="description" placeholder="Descrição" />
    <button type="submit" data-testid="add-food-button">
      <p className="text">Adicionar Prato</p>
      <div className="icon">
        <FiCheckSquare size={24} />
      </div>
    </button>
  </Form>
</Modal>
);
};

export default ModalAddFood;