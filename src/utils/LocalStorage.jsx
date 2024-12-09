

const employees = [
  {
    "id": 1,
    "firstName": "John",
    "email": "e@e.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Prepare Report",
        "taskDate": "2024-11-27",
        "category": "Documentation",
        "taskDescription": "Prepare the monthly sales report.",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team Meeting",
        "taskDate": "2024-11-28",
        "category": "Meeting",
        "taskDescription": "Attend the weekly team meeting.",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Client Call",
        "taskDate": "2024-11-29",
        "category": "Communication",
        "taskDescription": "Discuss project uptaskDates with the client.",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Alice",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Bug Fixing",
        "taskDate": "2024-11-27",
        "category": "Development",
        "taskDescription": "Fix critical bugs in the production environment.",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Code Review",
        "taskDate": "2024-11-28",
        "category": "Quality Assurance",
        "taskDescription": "Review the code for the new module.",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Database Backup",
        "taskDate": "2024-11-29",
        "category": "Maintenance",
        "taskDescription": "Perform a scheduled backup of the database.",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Michael",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Design Mockups",
        "taskDate": "2024-11-27",
        "category": "Design",
        "taskDescription": "Create mockups for the new UI.",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Research Trends",
        "taskDate": "2024-11-28",
        "category": "Research",
        "taskDescription": "Research latest industry trends.",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "UptaskDate Website",
        "taskDate": "2024-11-29",
        "category": "Maintenance",
        "taskDescription": "UptaskDate the homepage with new content.",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Emma",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Customer Feedback",
        "taskDate": "2024-11-27",
        "category": "Customer Service",
        "taskDescription": "Analyze customer feedback forms.",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Inventory Check",
        "taskDate": "2024-11-28",
        "category": "Inventory",
        "taskDescription": "Verify the current inventory levels.",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Shipment Coordination",
        "taskDate": "2024-11-29",
        "category": "Logistics",
        "taskDescription": "Coordinate shipment with suppliers.",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Sophia",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Draft Proposal",
        "taskDate": "2024-11-27",
        "category": "Planning",
        "taskDescription": "Draft a proposal for the new project.",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Budget Analysis",
        "taskDate": "2024-11-28",
        "category": "Finance",
        "taskDescription": "Analyze the project budget.",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Vendor Meeting",
        "taskDate": "2024-11-29",
        "category": "Vendor Management",
        "taskDescription": "Discuss requirements with the vendor.",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    }
  }
];

const admin = [{
      "id": 1,
      "email": "admin@example.com",
      "password": "123",
      "tasks": []
    }]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    return {employees, admin }

    // console.log(JSON.parse(data))
    // console.log(employees,admin)
}