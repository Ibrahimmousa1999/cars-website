import { useEffect } from 'react';

export const usePageMetadata = (title: string, description: string) => {
  useEffect(() => {
    // Set the document title
    document.title = `${title} | Cars`;
    
    // Update or create the meta description tag
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    
    metaDescription.content = description;
    
    // Cleanup function to reset the title and description when component unmounts
    return () => {
      document.title = 'Cars';
      if (metaDescription) {
        metaDescription.content = 'Default description for your site';
      }
    };
  }, [title, description]);
};
