/*
 * Action
 */
export const MARKER_CLICK = "markerClick";
export const GET_API_DATA = "getApiData";

export function markerClick() {
    return {
        type: MARKER_CLICK
    }
}
export function getApiData(_data) {
    return {
        type: GET_API_DATA,
        data: _data
    }
}