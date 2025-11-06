import React from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
// framer-motion removed to avoid adding dependency; use plain div for simple animation
import { ShoppingCart, Eye } from "lucide-react"

interface Product {
  title: string
  image?: string
  price: number
  description?: string
  cooperative?: string
}

interface ProductModalProps {
  product: Product
  onView: () => void
  onAddToCart?: () => void
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onView, onAddToCart }) => {
  return (
    <div className="transition-transform duration-300 opacity-100 translate-y-0">
  <Card className="group overflow-hidden rounded-xl bg-gradient-to-br from-white/70 to-green-50/80 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-300 hover:scale-[1.01] max-w-sm mx-auto">
        <div className="relative overflow-hidden h-52">
          <img
            src={product.image || 'https://via.placeholder.com/400x400?text=Product+Image'}
            alt={product.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <Button
              onClick={onView}
              className="bg-white/90 text-gray-800 hover:bg-white shadow-md backdrop-blur-sm font-medium text-sm"
              size="sm"
            >
              <Eye className="w-4 h-4 mr-1" />
              View
            </Button>
            {onAddToCart && (
              <Button
                onClick={onAddToCart}
                className="bg-gradient-to-r from-green-500 to-teal-500 text-white hover:opacity-90 shadow-md font-medium text-sm"
                size="sm"
              >
                <ShoppingCart className="w-4 h-4 mr-1" />
                Add
              </Button>
            )}
          </div>
        </div>

        <CardContent className="p-3">
          <div className="mb-1">
            <Badge
              variant="outline"
              className="text-[10px] font-semibold bg-gradient-to-r from-green-500 to-teal-500 text-white border-none shadow-sm px-2 py-0.5"
            >
              {product.cooperative}
            </Badge>
          </div>

          <h3 className="font-semibold text-base mb-1 text-gray-800 group-hover:text-green-700 transition-colors leading-tight truncate">
            {product.title}
          </h3>

          <p className="text-sm text-gray-600 line-clamp-2 mb-2 h-10">
            {product.description}
          </p>

          <p className="text-lg font-bold bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
            ${product.price.toFixed(2)}
          </p>
        </CardContent>

        <CardFooter className="px-3 py-2 border-t bg-gradient-to-t from-green-50/60 to-transparent">
          <div className="flex items-center justify-between w-full text-xs text-gray-600">
            <span className="font-medium text-gray-700 truncate">
              {product.cooperative}
            </span>
            <span className="italic text-gray-400">Organic</span>
          </div>
        </CardFooter>
      </Card>
  </div>
  )
}

export default ProductModal