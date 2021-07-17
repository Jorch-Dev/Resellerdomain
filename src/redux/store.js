import { configureStore } from "@reduxjs/toolkit"
import domProducer from "./domSlice";

export default configureStore({
    reducer: {
        Dominios: domProducer,
    },
});

