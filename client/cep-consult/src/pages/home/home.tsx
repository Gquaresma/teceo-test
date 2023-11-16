import { useState } from "react";
import InputMask from "react-input-mask";
import {
  FormContainer,
  Page,
  Title,
  TitleContainer,
  ContainerModal,
  ContentBox,
  Boxinfo,
} from "./styles";
import api from "../../service/api";
import { toast } from "react-toastify";
import Button from "../../components/button/button";

import { Address } from "../../types/addres";

export default function Home() {
  const [form, setForm] = useState({
    cep: "",
  });
  const [address, setAddress] = useState([]);
  const [open, setOpen] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const formData = {
        cep: form.cep,
      };
      const response = await api.post("/address", formData);

      setAddress(response.data);
      setOpen(true);
    } catch (error: any) {
      console.log(error.response.data);
      toast.error(`${error.response.data.message}` || "Erro inesperado", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handlerInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  return (
    <Page>
      <TitleContainer>
        <Title>Consulta de CEP</Title>
      </TitleContainer>

      <FormContainer onSubmit={handleSubmit}>
        <InputMask
          className="input-mask"
          mask="99999-999"
          name="cep"
          value={form.cep}
          type="text"
          onChange={handlerInputChange}
          placeholder="Digite o CEP"
        />
        <Button text="Consultar" color="#ffe5e5" />
      </FormContainer>

      <ContainerModal open={open} onClose={() => setOpen(false)}>
        <ContentBox>
          {address.map((item: Address) => (
            <div key={item.cep}>
              <Boxinfo>
                {" "}
                <b>CEP:</b> {item.cep}
              </Boxinfo>
              <Boxinfo>
                <b>Logradouro:</b> {item.logradouro}
              </Boxinfo>
              <Boxinfo>
                <b>Complemento:</b> {item.complemento || "Sem informação"}
              </Boxinfo>
              <Boxinfo>
                <b>Bairro: </b> {item.bairro}
              </Boxinfo>
              <Boxinfo>
                <b>Localidade:</b> {item.localidade}
              </Boxinfo>
              <Boxinfo>
                <b>IBGE:</b> {item.ibge}
              </Boxinfo>
              <Boxinfo>
                <b>GIA:</b> {item.gia || "Sem informação"}
              </Boxinfo>
              <Boxinfo>
                <b>DDD:</b> {item.ddd}
              </Boxinfo>
              <Boxinfo>
                <b>SIAFI:</b> {item.siafi}
              </Boxinfo>
            </div>
          ))}
        </ContentBox>
      </ContainerModal>
    </Page>
  );
}
