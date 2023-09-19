import { randomUUID } from "crypto";
import { Database } from "./database.js";
import { buildRoutePath } from "./utils/build-route-path.js";
const database = new Database();
export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => {
      const { search } = req.query;
      const data = database.select(
        "tasks",
        search
          ? {
              id: search,
              title: search,
              description: search,
            }
          : null
      );

      return res.end(JSON.stringify(data));
    },
  },
  {
    method: "POST",
    path: buildRoutePath("/tasks"),
    handler: (req, res) => {
      const { title, description } = req.body;

      if (!title || !description) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Missing required fields" }));

        return;
      }

      const newTask = {
        id: randomUUID(),
        title: title,
        description: description,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date(),
      };

      database.insert("tasks", newTask);

      res.writeHead(201).end();
    },
  },
  {
    method: "PUT",
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;

      const hasUser = database.select("tasks", { id });

      if (!hasUser[0]?.id) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Task not found" }));

        return;
      }
      const updatedDate = new Date();
      database.update("tasks", id, {
        ...hasUser[0],
        ...req.body,
        updated_at: updatedDate,
      });

      const updatedData = {
        ...hasUser[0],
        ...req.body,
        updated_at: updatedDate,
      };

      return res.writeHead(200).end(JSON.stringify(updatedData));
    },
  },
  {
    method: "DELETE",
    path: buildRoutePath("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;

      const hasUser = database.select("tasks", { id });

      if (!hasUser[0]?.id) {
        res.writeHead(404, { "Cnotent-Type": "application/json" });
        res.end(JSON.stringify({ message: "Task not found" }));

        return;
      }

      database.delete("tasks", id);

      return res.writeHead(200).end(JSON.stringify(hasUser[0]));
    },
  },
  {
    method: "PATCH",
    path: buildRoutePath("/tasks/:id/complete"),
    handler: (req, res) => {
      const { id } = req.params;

      const hasUser = database.select("tasks", { id });

      if (!hasUser[0]?.id) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Task not found" }));

        return;
      }
      const completedDate = new Date();

      if (!!hasUser[0].completed_at) {
        database.update("tasks", id, {
          ...hasUser[0],
          completed_at: null,
        });

        return res.writeHead(200).end();
      }

      const task = {
        ...hasUser[0],
        completed_at: completedDate,
      };
      database.update("tasks", id, task);

      return res.writeHead(200).end(JSON.stringify(task));
    },
  },
];
