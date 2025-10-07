'use client'

interface CategoryFilterProps {
  categories: string[]
  selected: string
  onChange: (category: string) => void
}

export function CategoryFilter({ categories, selected, onChange }: CategoryFilterProps) {
  return (
    <div className="mb-4">
      <h4 className="text-sm font-medium text-gray-700 mb-2">Categories</h4>
      <div className="space-y-2">
        {categories.map((category) => (
          <label key={category} className="flex items-center">
            <input
              type="radio"
              name="category"
              value={category}
              checked={selected === category}
              onChange={(e) => onChange(e.target.value)}
              className="mr-2 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm text-gray-700">{category}</span>
          </label>
        ))}
      </div>
    </div>
  )
}