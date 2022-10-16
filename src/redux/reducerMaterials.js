import { SatelliteAltRounded } from "@mui/icons-material";

const IS_VISIBLE_MATERIALS = "IS_VISIBLE_MATERIALS";
const CLEAR_DATA_MATERIALS = "CLEAR_DATA_MATERIALS";
const ACTION_PRICE = "ACTION_PRICE";
const CLEAR_PRICE_MATERIAL = "CLEAR_PRICE_MATERIAL";
const ADD_PRICE_MATERIAL = "ADD_PRICE_MATERIAL";
const NEW_MATERIAL = "NEW_MATERIAL";

const initialState = {
  priceMaterials: [
    {
      title: "Плитка",
      label: "1м²",
      price: "750",
      isVisible: false,
    },
    {
      title: "Поребрик",
      label: "1м",
      price: "250",
      isVisible: false,
    },
    {
      title: "Песок",
      label: "1т",
      price: "650",
      isVisible: false,
    },
    {
      title: "Щебень",
      label: "1т",
      price: "750",
      isVisible: false,
    },
    {
      title: "Цемент",
      label: "1шт (50кг)",
      price: "350",
      isVisible: false,
    },
  ],
  isVisible: false,
};
export const reducerMaterials = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_PRICE:
      return {
        ...state,
        priceMaterials: state.priceMaterials.map((el) => {
          if (el.title === action.title) {
            return {
              ...el,
              price: action.price,
            };
          }
          return el;
        }),
      };

    case IS_VISIBLE_MATERIALS:
      return { ...state, isVisible: true };
    case CLEAR_DATA_MATERIALS:
      return {
        ...state,
        plitkaPrice: "",
        porebrikPrice: "",
        pricePesok: "",
        priceSheben: "",
        priceCement: "",
        isVisible: action.payload,
      };
    case CLEAR_PRICE_MATERIAL:
      return {
        ...state,
        priceMaterials:  state.priceMaterials.filter((el) => el.title !== action.payload),
        
      };
      case NEW_MATERIAL:
      return {
        ...state,
        ...state.priceMaterials
            .push({
                title: action.title,
                price: action.price,
                label: action.label,
            })

    }

    default:
      return state;
  }
};

export const actionPrice = (title, price) => ({
  type: ACTION_PRICE,
  title,
  price,
});
export const actionAddPrice = (title, price, label) => ({
  type: ADD_PRICE_MATERIAL,
  title,
  price,
  label,
});
export const actionClearPrice = (payload) => ({
  type: CLEAR_PRICE_MATERIAL,
  payload,
});
export const actionIsVisibleMaterials = () => ({ type: IS_VISIBLE_MATERIALS });

export const actionClearDataMaterials = (payload) => ({
  type: CLEAR_DATA_MATERIALS,
  payload,
});

export const actionNewMaterial = (title,price,label) => ({
  type: NEW_MATERIAL,
  title,
  price,
  label
});


