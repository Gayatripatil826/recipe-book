import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Recipe {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  prepTime: number;
  cookTime: number;
  rating: string;
  ingredients: string[];
  instructions: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  searchText = '';
  selectedCategory = 'All Recipes';
  selectedRecipe: Recipe | null = null;
  favorites: number[] = [];

  categories = [
    'All Recipes',
    'Breakfast',
    'Lunch',
    'Dinner',
    'Desserts',
    'Snacks'
  ];

  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Creamy Alfredo Pasta',
      category: 'Dinner',
      image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=900&q=85',
      description: 'Silky cream sauce, parmesan cheese and perfectly cooked pasta.',
      prepTime: 10,
      cookTime: 20,
      rating: '4.9',
      ingredients: ['200 g fettuccine pasta', '1 cup fresh cream', '3 garlic cloves', '½ cup parmesan cheese', '2 tbsp butter', 'Salt and black pepper'],
      instructions: ['Cook the pasta in salted boiling water until tender.', 'Melt butter in a pan and sauté the chopped garlic.', 'Add cream, parmesan, salt and pepper. Stir until smooth.', 'Toss the cooked pasta in the sauce and serve warm.']
    },
    {
      id: 2,
      name: 'Margherita Pizza',
      category: 'Dinner',
      image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85',
      description: 'Classic pizza topped with tomato sauce, mozzarella and basil.',
      prepTime: 20,
      cookTime: 15,
      rating: '4.8',
      ingredients: ['1 pizza base', '½ cup pizza sauce', '150 g mozzarella cheese', 'Fresh basil leaves', '1 tsp olive oil', 'Oregano'],
      instructions: ['Preheat the oven to 220°C.', 'Spread pizza sauce over the base.', 'Add mozzarella and basil leaves.', 'Bake until the crust is golden and the cheese melts.']
    },
    {
      id: 3,
      name: 'Fluffy Pancakes',
      category: 'Breakfast',
      image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85',
      description: 'Soft, golden pancakes served with maple syrup and berries.',
      prepTime: 10,
      cookTime: 15,
      rating: '4.9',
      ingredients: ['1 cup all-purpose flour', '1 egg', '¾ cup milk', '2 tbsp sugar', '1 tsp baking powder', 'Butter and maple syrup'],
      instructions: ['Mix flour, sugar and baking powder in a bowl.', 'Whisk in the egg and milk to make a smooth batter.', 'Pour small portions onto a lightly buttered pan.', 'Flip when bubbles appear. Cook until golden and serve with syrup.']
    },
    {
      id: 4,
      name: 'Classic Veg Burger',
      category: 'Snacks',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85',
      description: 'A juicy vegetable patty with lettuce, tomato and creamy sauce.',
      prepTime: 15,
      cookTime: 15,
      rating: '4.7',
      ingredients: ['2 burger buns', '2 vegetable patties', 'Lettuce leaves', '1 tomato', '2 cheese slices', 'Burger sauce'],
      instructions: ['Cook the vegetable patties until crisp and hot.', 'Toast the burger buns lightly.', 'Spread sauce on the buns.', 'Layer lettuce, patty, cheese and tomato, then serve.']
    },
    {
      id: 5,
      name: 'Fresh Greek Salad',
      category: 'Lunch',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85',
      description: 'A refreshing bowl of crunchy vegetables, olives and feta.',
      prepTime: 15,
      cookTime: 0,
      rating: '4.6',
      ingredients: ['1 cucumber', '2 tomatoes', '½ red onion', '½ cup olives', '100 g feta cheese', 'Olive oil and lemon juice'],
      instructions: ['Wash and chop the cucumber and tomatoes.', 'Thinly slice the red onion.', 'Combine the vegetables and olives in a bowl.', 'Add feta, olive oil and lemon juice. Toss gently.']
    },
    {
      id: 6,
      name: 'Chocolate Brownies',
      category: 'Desserts',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85',
      description: 'Rich chocolate brownies with a soft, fudgy centre.',
      prepTime: 15,
      cookTime: 25,
      rating: '4.9',
      ingredients: ['100 g dark chocolate', '½ cup butter', '¾ cup sugar', '2 eggs', '½ cup flour', '2 tbsp cocoa powder'],
      instructions: ['Preheat the oven to 180°C.', 'Melt chocolate and butter together.', 'Whisk in sugar and eggs.', 'Fold in flour and cocoa, then bake for 20–25 minutes.']
    },
    {
      id: 7,
      name: 'Paneer Tikka',
      category: 'Snacks',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=85',
      description: 'Indian cottage cheese marinated with aromatic spices.',
      prepTime: 20,
      cookTime: 20,
      rating: '4.8',
      ingredients: ['250 g paneer', '½ cup thick yogurt', '1 tsp red chilli powder', '½ tsp turmeric', '1 tsp garam masala', 'Capsicum and onion'],
      instructions: ['Mix yogurt with the spices to prepare the marinade.', 'Coat paneer, capsicum and onion in the marinade.', 'Rest for 15 minutes.', 'Grill or pan-cook until lightly charred on all sides.']
    },
    {
      id: 8,
      name: 'Vegetable Fried Rice',
      category: 'Lunch',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85',
      description: 'Fragrant rice tossed with colourful vegetables and soy sauce.',
      prepTime: 15,
      cookTime: 15,
      rating: '4.7',
      ingredients: ['2 cups cooked rice', '½ cup carrots', '½ cup beans', '½ cup capsicum', '1 tbsp soy sauce', '2 garlic cloves'],
      instructions: ['Heat oil in a wok and sauté chopped garlic.', 'Add the vegetables and stir-fry until slightly tender.', 'Add cooked rice and soy sauce.', 'Toss over high heat and serve hot.']
    },
    {
      id: 9,
      name: 'Strawberry Cheesecake',
      category: 'Desserts',
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85',
      description: 'Creamy cheesecake finished with sweet strawberry topping.',
      prepTime: 25,
      cookTime: 40,
      rating: '4.9',
      ingredients: ['200 g cream cheese', '1 cup crushed biscuits', '4 tbsp melted butter', '½ cup sugar', '½ cup cream', 'Fresh strawberries'],
      instructions: ['Mix crushed biscuits with butter and press into a tin.', 'Beat cream cheese, sugar and cream until smooth.', 'Spread the filling over the biscuit base.', 'Bake until set, cool completely and top with strawberries.']
    },
    {
      id: 10,
      name: 'Masala Dosa',
      category: 'Breakfast',
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=85',
      description: 'Crispy South Indian dosa filled with spiced potato masala.',
      prepTime: 15,
      cookTime: 20,
      rating: '4.8',
      ingredients: ['2 cups dosa batter', '3 boiled potatoes', '1 onion', '½ tsp mustard seeds', 'Curry leaves', 'Turmeric and salt'],
      instructions: ['Mash the boiled potatoes.', 'Sauté mustard seeds, onion and curry leaves; add potatoes and turmeric.', 'Spread dosa batter thinly on a hot pan.', 'Cook until crisp, add potato masala and fold.']
    },
    {
      id: 11,
      name: 'Creamy Tomato Soup',
      category: 'Lunch',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=85',
      description: 'Smooth tomato soup with herbs and a touch of cream.',
      prepTime: 10,
      cookTime: 25,
      rating: '4.6',
      ingredients: ['5 ripe tomatoes', '1 small onion', '2 garlic cloves', '1 cup vegetable stock', '2 tbsp cream', 'Salt and pepper'],
      instructions: ['Chop the tomatoes and onion.', 'Sauté onion and garlic, then add tomatoes and stock.', 'Simmer until the tomatoes are soft.', 'Blend until smooth, season and finish with cream.']
    },
    {
      id: 12,
      name: 'Classic Tiramisu',
      category: 'Desserts',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=85',
      description: 'An elegant Italian dessert layered with coffee-soaked biscuits.',
      prepTime: 25,
      cookTime: 0,
      rating: '4.8',
      ingredients: ['200 g mascarpone cheese', '1 cup whipped cream', '1 cup cooled coffee', 'Ladyfinger biscuits', '2 tbsp sugar', 'Cocoa powder'],
      instructions: ['Whisk mascarpone, sugar and whipped cream together.', 'Briefly dip the biscuits in cooled coffee.', 'Layer biscuits and cream in a dish.', 'Dust with cocoa and chill for at least four hours.']
    },
    {
      id: 13,
      name: 'Crispy French Fries',
      category: 'Snacks',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85',
      description: 'Golden potato fries seasoned with salt and herbs.',
      prepTime: 15,
      cookTime: 20,
      rating: '4.7',
      ingredients: ['3 large potatoes', 'Oil for frying', 'Salt', 'Black pepper', 'Paprika (optional)'],
      instructions: ['Cut potatoes into even-sized strips.', 'Rinse and dry thoroughly.', 'Fry in hot oil until golden and crisp.', 'Drain, season and serve immediately.']
    },
    {
      id: 14,
      name: 'Mango Smoothie',
      category: 'Breakfast',
      image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=900&q=85',
      description: 'A cool, creamy mango drink made with ripe fruit and yogurt.',
      prepTime: 5,
      cookTime: 0,
      rating: '4.8',
      ingredients: ['1 ripe mango', '½ cup yogurt', '½ cup milk', '1 tsp honey', 'Ice cubes'],
      instructions: ['Peel and chop the ripe mango.', 'Add mango, yogurt, milk and honey to a blender.', 'Blend until smooth and creamy.', 'Pour into a chilled glass and serve.']
    },
    {
      id: 15,
      name: 'Grilled Vegetable Sandwich',
      category: 'Lunch',
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85',
      description: 'Toasted bread layered with fresh vegetables and melted cheese.',
      prepTime: 10,
      cookTime: 10,
      rating: '4.6',
      ingredients: ['4 slices bread', '1 tomato', '½ cucumber', '1 small capsicum', '2 cheese slices', 'Butter and sandwich spread'],
      instructions: ['Slice the vegetables thinly.', 'Spread butter and sandwich spread on the bread.', 'Add vegetables and cheese.', 'Grill until the bread is golden and the cheese melts.']
    }
  ];

  constructor() {
    try {
      const saved = localStorage.getItem('restaurant-recipe-favorites');
      this.favorites = saved ? JSON.parse(saved) : [];
    } catch {
      this.favorites = [];
    }
  }

  get filteredRecipes(): Recipe[] {
    return this.recipes.filter(recipe => {
      const matchesCategory =
        this.selectedCategory === 'All Recipes' ||
        (this.selectedCategory === 'Favorites'
          ? this.favorites.includes(recipe.id)
          : recipe.category === this.selectedCategory);

      const search = this.searchText.trim().toLowerCase();
      const matchesSearch =
        !search ||
        recipe.name.toLowerCase().includes(search) ||
        recipe.category.toLowerCase().includes(search) ||
        recipe.description.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  toggleFavorite(id: number): void {
    this.favorites = this.favorites.includes(id)
      ? this.favorites.filter(item => item !== id)
      : [...this.favorites, id];

    try {
      localStorage.setItem(
        'restaurant-recipe-favorites',
        JSON.stringify(this.favorites)
      );
    } catch {
      // Favorites still work until the page is refreshed.
    }
  }

  isFavorite(id: number): boolean {
    return this.favorites.includes(id);
  }

  openRecipe(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  closeRecipe(): void {
    this.selectedRecipe = null;
  }

  trackByRecipeId(_index: number, recipe: Recipe): number {
    return recipe.id;
  }
}