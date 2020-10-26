import glob
import os

# get all file/folder name
all_files = glob.glob('../dist/**', recursive=True)
all_files.sort()
print('all file list :', all_files)

db_hash = [s for s in all_files if '.json' in s][0].replace(
    '../dist/_nuxt/content/db-','').replace('.json','')
print('now db hash:', db_hash)

static_hash = glob.glob('../dist/_nuxt/static/*')[0].replace('../dist/_nuxt/static/','')
print('now static hash:',static_hash)

def rewrite_jsload(all_file_name):
    for file_name in all_file_name:
        with open(file_name, 'r') as s:
            f = s.read()
    #         replace point 1
            after1_f = f.replace('plugin.js', 'plugin')
        #         replace point 2
            after2_f = after1_f.replace('.js" as="script"', 'JS&action=raw&ctype=text/javascript" as="script"')
#         replace point 2.1
            after21_f = after2_f.replace('.js" defer', 'JS?action=raw&amp;ctype=text/javascript" defer as="script"')
           
#         replace point 2.2
            after22_f = after21_f.replace('"payload.js"', '"payloadJS&action=raw&ctype=text/javascript"')

#         replace point 2.3
            after23_f = after22_f.replace('+".js"', '+"JS?action=raw"')
    
        #         replace point 3
            after3_f = after23_f.replace('<!DOCTYPE html>', '')


            # for Waseda team
            after31_f = after3_f.replace('rel=“stylesheet” type=“text/css” href=“https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css”','https://2020.igem.org/Template:Waseda/cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.minCSS&action=raw&ctype=text/css')
        #         replace point 4
            after4_f = after31_f.replace(db_hash, 'b25b294c')#b25b294c User specified hash

        #         replace point 5
            after5_f = after4_f.replace(static_hash, '1602327010')#1602327010 User specified hash

            start_pos = after5_f.find('<script>window.__NUXT__=')
            end_pos = after5_f.find('{dbHash:"b25b294c"}}}</script>')
            if end_pos != -1:
#                 print(end_pos)
                end_pos += len('{dbHash:"b25b294c"}}}</script>')
                print('reposition test:', after5_f[start_pos:end_pos])
        
                after5_f.replace(after5_f[start_pos:end_pos],'')
                print(after5_f.find('</body>'))
                
                add_text = ''
                all_pages_name = glob.glob('../dist/_nuxt/pages/*')
                for add_file_name in all_pages_name:
#                     add_file_name = 'inspireJS' #example
                    add_file_name = add_file_name.replace('../dist/_nuxt/pages/','').replace('.js','JS')
                    add_text += '<script src="/Team:Waseda/_nuxt/pages/{}?action=raw&amp;ctype=text/javascript" defer as="script"></script>'.format(add_file_name)
        
                add_text += after5_f[start_pos:end_pos]
                after6_f = after5_f.replace('</body>',add_text+'</body>')
            
            else:
                after6_f = after5_f     



    #     if last repalce?
            after_f = after6_f

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
static_folder = glob.glob('../dist/_nuxt/static/*')
print(static_folder)
for folder_name in static_folder:
    if os.path.exists(folder_name):
        os.rename(folder_name, folder_name.replace(static_hash,'1602327010')) #1602327010 User specified hash
        print('rewrite finished static folder name', folder_name, 'to', folder_name.replace(static_hash,'1602327010'))
    else:
        print('folder rewrite error: ',folder_name)

# change db file name (hash to User specified hash) (one json file ver)
all_content_file = glob.glob('../dist/_nuxt/content/*')
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

        
# make uploadfolder
build_dir = '../buildFolder'
if not os.path.isdir(build_dir):
    os.mkdir(build_dir)
    
new_all_files = glob.glob('../dist/**', recursive=True)
new_all_files.sort()

new_all_js_files = [s for s in new_all_files if '.js' in s]
new_js_file = [s for s in new_all_js_files if '.json' not in s]

for file_name in new_js_file:
    build_folder = file_name.replace('../dist', build_dir)
    if not os.path.isdir(os.path.dirname(build_folder)): 
        os.makedirs(os.path.dirname(build_folder))
    os.rename(file_name, build_folder)
new_all_html_files = [s for s in new_all_files if '.html' in s]
new_html_file = [s for s in new_all_html_files if '200' not in s]

for file_name in new_html_file:
    build_folder = file_name.replace('../dist', build_dir)
    if not os.path.isdir(os.path.dirname(build_folder)): 
        os.makedirs(os.path.dirname(build_folder))
    os.rename(file_name, build_folder)
    
    