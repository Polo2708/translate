import { useTranslateController } from "../controller/translate-controller";

function TranslateComponent() {
    const { textTranslate, loading, refreshText } = useTranslateController();

    return (
        <div className="flex flex-col gap-2 h-screenjustify-center items-center">
            <button className={`border flex items-center gap-3.5 px-2 rounded-md py-1 bg-green-300/25 border-gray-500 ${loading ? "cursor-no-drop" : "cursor-pointer"}`} disabled={loading} onClick={refreshText}>
                {!loading ? (
                    <div>
                        Refrescar
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <div className="w-6 h-6 border-2 rounded-full border-white border-t-blue-200 animate-spin" />
                        <p>Loading</p>
                    </div>
                )}
            </button>
            <span>{textTranslate}</span>
        </div>
    );
}

export default TranslateComponent;
