export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: "BQCRMFQuW-l3fl0E9vI-Bvzx40-BqQv0gkuB90_u6MXVz2-JCF1S22aLH3bsPLh8KVyBEtPUzYcn9qajQjI0fGW3inp46KjVeTlu1tZrZAmnv2H3_a8HPWoGcblCbD-Nf5bO8C1VtZRBu5ax0nCojDb3K7-W2cllVSSOI74Feo9YrQpiCNJ20EvRNoDDSMoaiNkf_6l7hyPV_YH7zQNg",
};

const reducer = (state, action) => {
    console.log("La Action: ", action);

    // Action -> type, [payload]

    switch (action.type) {
        case 'SET_USER':
            return {
                //when we log in keep the state and set the user to the datalayer
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
    }
}

export default reducer;