import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "¿Qué cursos y talleres están disponibles?",
        value: "¿Qué cursos y talleres están disponibles?"
    },
    { text: "¿Cuáles son las formas de pago?", value: "¿Cuáles son las formas de pago?" },
    { text: "¿Cuáles son las formas de pago?", value: "¿Cuáles son las formas de pago?" },
    { text: "¿Cuáles son las formas de pago?", value: "¿Cuáles son las formas de pago?" },
    { text: "¿En dónde se dictan los cursos?", value: "¿En dónde se dictan los cursos?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
