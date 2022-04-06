import axios from "axios";

// request functionality only for method. no mapping, no business
// use qs in making and parsing query string
const AuthRepository = {
  createSomething: async () => {
    try {
      const res = await axios.get(
        "https://axios.tvmaze.com/search/shows?q=batman",
      );
      return res;
    } catch (error) {
      return new Error("create something err");
    }
  },

  createUser: async registerObj => {
    const queryObj = {
      dto: {
        USER_LOGIN_ID: registerInfo.userId,
        USER_PW: registerInfo.pw,
        USER_NAME: registerInfo.name,
        USER_PHONE: registerInfo.phone,
        NATIONAL_CODE: registerInfo.ncode,
        USER_TYPE: registerInfo.type,
        USER_EMAIL: registerInfo.email,
        TERM_PERSONAL: registerInfo.personal,
        TERM_ADVERTISE: registerInfo.advertise,
        REGI_PATH: registerInfo.path,
      },
    };
    try {
      const response = await axios.post(`user-axios/users`, queryObj);
      if (response.data.dto.RESULT_CD === "RST0001") {
        return true;
      }
      return false;
    } catch (error) {
      throw Error(JSON.stringify(error.response.data.exception));
    }
  },

  // Token Refresh
  getTokenRefresh = async () => {
    try {
      const response = await axios.post(`user-axios/token-refresh`);
      return response;
    } catch (error) {
      throw Error(error.message);
    }
  },

  getPermissions: async () => {
    try {
      const response = await axios.get(`user-axios/permissions`);
      const permissionList = response.data.dto.rolePermissionList;
      if (!permissionList?.length) {
        return {};
      }
      const convertedResponse =
        convertFromPermissionDtoObjToPlatformObj(permissionList);
      return convertedResponse;
    } catch (error) {
      throw Error(error.message);
    }
  },
};

export default AuthRepository;
