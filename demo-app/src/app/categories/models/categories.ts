

export type Category = {
  categoryId: number;
  categoryName: string;
  description: string;
};

export type NewCategory = Omit<Category, "categoryId">;
