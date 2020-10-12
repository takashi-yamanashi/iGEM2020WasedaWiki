import glob
import os

# get all file/folder name
all_files = glob.glob('./dist/**', recursive=True)
all_files.sort()
print('all file list :', all_files)

db_hash = [s for s in all_files if '.json' in s][0].replace(
    './dist/_nuxt/content/db-','').replace('.json','')
print('now db hash:', db_hash)

static_hash = glob.glob('./dist/_nuxt/static/*')[0].replace('./dist/_nuxt/static/','')
print('now static hash:',static_hash)

def rewrite_jsload(all_file_name):
    for file_name in all_file_name:
        with open(file_name, 'r') as s:
            f = s.read()
    #         replace point 1
            after1_f = f.replace('plugin.js', 'plugin')
        #         replace point 2
            after2_f = after1_f.replace('.js" as="script"', 'JS?action=raw&amp;ctype=text/javascript" as="script"')
#         replace point 2.1
            after21_f = after2_f.replace('.js" defer', 'JS?action=raw&amp;ctype=text/javascript" defer as="script"')
        
        #         replace point 3
            after3_f = after21_f.replace('<!DOCTYPE html>', '')

        #         replace point 4
            after4_f = after3_f.replace(db_hash, 'b25b294c')#b25b294c User specified hash

        #         replace point 5
            after5_f = after4_f.replace(static_hash, '1602327010')#1602327010 User specified hash

    #     if last repalce?
            after_f = after5_f

        with open(file_name,'w') as fout:
            fout.write(after_f)
        
# first rewrite html
all_html_file = [s for s in all_files if '.html' in s]
rewrite_jsload(all_html_file)
print('rewrite finished html file list', all_html_file )

# first rewrite js
all_js_file = [s for s in all_files if '.js' in s]
rewrite_jsload(all_js_file)
print('rewrite finished js file list', all_js_file )

# change folder name (hash to User specified hash)
static_folder = glob.glob('./dist/_nuxt/static/*')
print(static_folder)
for folder_name in static_folder:
    if os.path.exists(folder_name):
        os.rename(folder_name, folder_name.replace(static_hash,'1602327010')) #1602327010 User specified hash
        print('rewrite finished static folder name', folder_name, 'to', folder_name.replace(static_hash,'1602327010'))
    else:
        print('folder rewrite error: ',folder_name)

# change db file name (hash to User specified hash) (one json file ver)
all_content_file = glob.glob('./dist/_nuxt/content/*')
all_content_json_file = [s for s in all_content_file if '.json' in s] 
print(all_content_json_file)
for file_name in all_content_json_file:
    if os.path.exists(file_name):
        os.rename(file_name, file_name.replace(db_hash,'b25b294c')) #b25b294c User specified hash
        print('rewrite finished content file name', file_name, 'to', file_name.replace(db_hash,'b25b294c'))
    else:
        print('folder rewrite error: ',file_name)

# change plugin.js.js file name (hash to User specified hash) (one json file ver)

all_pluginjs_file = [s for s in all_files if 'plugin.js.js' in s] 
print(all_pluginjs_file)
for file_name in all_pluginjs_file:
    if os.path.exists(file_name):
        os.rename(file_name, file_name.replace('plugin.js','plugin')) 
        print('rewrite finished plugin.js.js file name', file_name, file_name.replace('plugin.js','plugin'))
    else:
        print('folder rewrite error: ',file_name)