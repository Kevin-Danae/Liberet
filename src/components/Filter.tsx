import { Button, Modal } from "native-base";
import React, { useContext, useState } from "react";
import { Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CatContext } from "../context/CatContext";

interface Props {
  options: string[];
  first: string;
  title: string;
  icon: "silverware-fork-knife" | "clock-outline";
}

export const Filter = ({ options, first, title, icon }: Props) => {
  const [modal, setModal] = useState(false);
  const [option, setOption] = useState(first);
  const { category, time } = useContext(CatContext);
  return (
    <>
      <Button
        onPress={() => setModal(true)}
        startIcon={
          <MaterialCommunityIcons name={icon} size={20} color="#FDC963" />
        }
        size="xs"
        variant="ghost"
        backgroundColor="white"
        borderRadius={10}
        height={6}
      >
        <Text>{option}</Text>
      </Button>
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        <Modal.Content style={{ alignItems: "center" }}>
          <Modal.CloseButton />

          <Modal.Header style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons name={icon} size={20} color="#FDC963" />
            <Text style={{ fontSize: 15, paddingTop: 3 }}>{title}</Text>
          </Modal.Header>

          <Modal.Body>
            {options.map((e) => (
              <Button
                key={e}
                onPress={() => {
                  !e.includes("0") ? category(e) : time(e);
                  setOption(e);
                  setModal(false);
                }}
                shadow={5}
                style={{ marginTop: 4, elevation: 5, marginLeft: 3 }}
                size="sm"
                backgroundColor="white"
              >
                <Text>{e}</Text>
              </Button>
            ))}
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};
