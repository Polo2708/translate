import { useTranslateController } from "../controller/translate-controller";

function TranslateComponent() {
    const { textTranslate } = useTranslateController();

    return (
        <div className="flex flex-col gap-2">
            <span>{textTranslate}</span>
        </div>
    );
}

export default TranslateComponent;
