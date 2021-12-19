const Customer = require("../model/customerSchema");
const moment = require("moment");

class CustomerController {
  static async getAll(req, res) {
    try {
      let data = await Customer.find({});

      if (!data.length) {
        return res.status(200).json({
          message: "No data found",
          result: [],
        });
      }

      return res.status(200).json({
        message: "Data found",
        result: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Error",
        result: error,
      });
    }
  }

  static async getAllByType(req, res) {
    try {
      const { type } = req.params;
      let data = await Customer.find({ type: type });

      if (!data.length) {
        return res.status(200).json({
          message: "No data found",
          result: [],
        });
      }

      return res.status(200).json({
        message: "Data found",
        result: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Error",
        result: error,
      });
    }
  }

  static async getByQueue(req, res) {
    try {
      const { queue, type } = req.body;
      const data = await Customer.find({ queue, type });

      if (!data.length) {
        return res.status(200).json({
          message: "No data found",
          result: [],
        });
      }

      return res.status(200).json({
        message: "Data found",
        result: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Error",
        result: error,
      });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const data = await Customer.findById(id);

      if (!data) {
        return res.status(200).json({
          message: "No data found",
          result: [],
        });
      }

      return res.status(200).json({
        message: "Data found",
        result: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Error",
        result: error,
      });
    }
  }

  static async insert(req, res) {
    try {
      const { username, gender, birthday, type } = req.body;

      if (!username || !gender || !birthday || !type) {
        return res.status(400).json({
          message: "There are missing field",
        });
      }
      let latestQueue;

      const dataByType = await Customer.findOne({ type: type }).sort({
        queue: -1,
      });

      if (
        !dataByType ||
        moment(dataByType.todayDate).format("LL") !== moment().format("LL")
      ) {
        latestQueue = 0;
      } else {
        latestQueue = dataByType.queue;
      }

      const newCustomer = new Customer({
        username,
        gender,
        todayDate: moment(),
        birthday: moment(birthday),
        queue: latestQueue + 1,
        type,
      });
      await newCustomer.save();

      return res.status(200).json({
        message: "New queue created",
        result: `Your queue is ${type}-${latestQueue + 1}`,
      });
    } catch (error) {
      console.log(error, "ERROR");
      return res.status(500).json({
        message: "Error",
        result: error,
      });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          message: "ID is missing",
        });
      }

      const { username, gender, birthday, type, queue } = req.body;
      console.log(req.body);

      const data = await Customer.findById(id);

      if (!data) {
        return res.status(404).json({
          message: "Customer not found",
        });
      }

      if (username) {
        data.username = username;
      }
      if (gender) {
        data.gender = gender;
      }
      if (birthday) {
        data.birthday = birthday;
      }
      if (type) {
        data.type = type;
      }
      if (queue) {
        data.queue = queue;
      }
      await data.save();

      return res.status(200).json({
        message: "customer data is updated",
        result: data,
      });
    } catch (error) {
      console.log(error, "ERROR");
      return res.status(500).json({
        message: "Error",
        result: error,
      });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          message: "ID is missing",
        });
      }

      const data = await Customer.findById(id);

      if (!data) {
        return res.status(404).json({
          message: "Customer not found",
        });
      }

      await data.remove();

      return res.status(200).json({
        message: "customer have been deleted",
      });
    } catch (error) {
      console.log(error, "ERROR");
      return res.status(500).json({
        message: "Error",
        result: error,
      });
    }
  }
}

module.exports = CustomerController;
