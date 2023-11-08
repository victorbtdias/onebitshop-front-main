import React, { useState } from "react";
import { Description, ReadMoreLess } from "./styled";

interface descriptionProps {
  desc: string;
}

const DescriptionComponent = ({ desc }: descriptionProps) => {
  const [readMoreText, setReadMoreText] = useState("Ler Mais");
  const [numberOfLines, setNumberOfLines] = useState(3);

  const handleReadMore = (numberOfLines: number) => {
    if (numberOfLines != 3) {
      setNumberOfLines(3);
      setReadMoreText("Ler Mais");
    } else {
      setNumberOfLines(100);
      setReadMoreText("Ler Menos");
    }
  };

  return (
    <>
      <Description numberOfLines={numberOfLines}>{desc}</Description>
      {desc.length >= 115 ? (
        <ReadMoreLess
          onPress={() => {
            handleReadMore(numberOfLines);
          }}
        >
          {readMoreText}
        </ReadMoreLess>
      ) : null}
    </>
  );
};

export default DescriptionComponent;
