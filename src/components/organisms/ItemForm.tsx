import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Plus, Sparkles } from 'lucide-react';
import { Card, Button } from '../atoms';
import { FormField, TextareaField } from '../molecules';
import { Item } from '@/domain/entities';

interface ItemFormData {
  title: string;
  body: string;
}

interface ItemFormProps {
  onSubmit: (data: Omit<Item, 'id'>) => void;
  isLoading?: boolean;
}

export const ItemForm: React.FC<ItemFormProps> = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ItemFormData>();

  const handleFormSubmit = (data: ItemFormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="mb-8 border-2 border-transparent hover:border-purple-500/20 dark:hover:border-purple-400/20">
        <motion.div 
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </motion.div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Add New Item
          </h2>
        </motion.div>
        
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-1">
          <FormField
            label="Title"
            placeholder="Enter item title"
            required
            error={errors.title?.message}
            {...register('title', {
              required: 'Title is required',
              minLength: {
                value: 3,
                message: 'Title must be at least 3 characters',
              },
              maxLength: {
                value: 100,
                message: 'Title must not exceed 100 characters',
              },
            })}
          />

          <TextareaField
            label="Body"
            placeholder="Enter item description"
            required
            error={errors.body?.message}
            {...register('body', {
              required: 'Body is required',
              minLength: {
                value: 10,
                message: 'Body must be at least 10 characters',
              },
              maxLength: {
                value: 500,
                message: 'Body must not exceed 500 characters',
              },
            })}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button type="submit" isLoading={isLoading} className="w-full mt-2">
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                  Adding...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Plus className="w-5 h-5" />
                  <span>Add Item</span>
                </span>
              )}
            </Button>
          </motion.div>
        </form>
      </Card>
    </motion.div>
  );
};