const autoBind = require("auto-bind");
const UserModel = require("../user/user.model");
const createHttpError = require("http-errors");
const { AuthMessages } = require("./auth.messages");
const { randomInt } = require("crypto");
class AuthService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = UserModel;
  }
  async sendOTP(mobile) {
    const user = await this.checkExistByMobile(mobile);
    const now = new Date().getTime();
    const otp = {
      code: randomInt(10000, 99999),
      expiresIn: (expiresIn = now + 1000 * 60 * 2),
    };

    if (!user) {
      const newUser = await this.#model.create({ mobile, otp });
      return newUser;
    }
    if (user.otp && user.otp.expiresIn > now) {
      throw new createHttpError.BadRequest(AuthMessages.OtpCodeExpired);
    }

    user.otp = otp;
    await user.save();
    return user;
  }
  async checkOTP(mobile, code) {}
  async checkExistByMobile(mobile) {
    const user = await this.#model.findOne({ mobile });
    if (!user) throw new createHttpError.NotFound(AuthMessages.NotFound);
    return user;
  }
}

module.exports = new AuthService();
