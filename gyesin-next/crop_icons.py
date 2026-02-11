from PIL import Image
import os

source_path = r"C:/Users/박채현/.gemini/antigravity/brain/e9291fbe-4ead-4f82-ba7a-a6ec6014e603/uploaded_media_1770799300127.jpg"
dest_dir = r"d:\프로젝트\gyesin\gyesin-next\public\icons"

try:
    img = Image.open(source_path)
    width, height = img.size
    
    # Grid is 3 cols x 2 rows
    cell_width = width // 3
    cell_height = height // 2
    
    icons = [
        "icon-space.jpg",      # 0,0
        "icon-caller.jpg",     # 1,0
        "icon-mobile.jpg",     # 2,0
        "icon-property.jpg",   # 0,1
        "icon-schedule.jpg",   # 1,1
        "icon-sms.jpg"         # 2,1
    ]
    
    # Order in problems array:
    # 1. Space (Globe)
    # 2. Caller ID (Phone)
    # 3. Mobile Work (MonitorSmartphone)
    # 4. All Property (Building)
    # 5. AI Schedule (Zap)
    # 6. SMS (MessageCircle)
    
    # The grid in the image matches this order perfectly (row-major).
    
    count = 0
    for row in range(2):
        for col in range(3):
            left = col * cell_width
            top = row * cell_height
            right = left + cell_width
            bottom = top + cell_height
            
            cropped = img.crop((left, top, right, bottom))
            
            # Save
            filename = icons[count]
            path = os.path.join(dest_dir, filename)
            cropped.save(path)
            print(f"Saved {filename}")
            count += 1
            
    print("All icons processed successfully.")

except Exception as e:
    print(f"Error: {e}")
