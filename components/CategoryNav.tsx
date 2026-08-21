import Link from "next/link";
import { categories } from "@/content/categories";

export function CategoryNav() {
  return (
    <nav className="category-strip" aria-label="カテゴリ">
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          {category.name}
        </Link>
      ))}
    </nav>
  );
}
